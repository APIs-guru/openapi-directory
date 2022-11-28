import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://codecommit.{region}.amazonaws.com",
	"https://codecommit.{region}.amazonaws.com",
	"http://codecommit.{region}.amazonaws.com.cn",
	"https://codecommit.{region}.amazonaws.com.cn",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}

/* SDK Documentation: https://docs.aws.amazon.com/codecommit/ - Amazon Web Services documentation*/
export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * associateApprovalRuleTemplateWithRepository - Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
  **/
  associateApprovalRuleTemplateWithRepository(
    req: operations.AssociateApprovalRuleTemplateWithRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssociateApprovalRuleTemplateWithRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssociateApprovalRuleTemplateWithRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AssociateApprovalRuleTemplateWithRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumRuleTemplatesAssociatedWithRepositoryException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * batchAssociateApprovalRuleTemplateWithRepositories - Creates an association between an approval rule template and one or more specified repositories. 
  **/
  batchAssociateApprovalRuleTemplateWithRepositories(
    req: operations.BatchAssociateApprovalRuleTemplateWithRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchAssociateApprovalRuleTemplateWithRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchAssociateApprovalRuleTemplateWithRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BatchAssociateApprovalRuleTemplateWithRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchAssociateApprovalRuleTemplateWithRepositoriesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNamesRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumRepositoryNamesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * batchDescribeMergeConflicts - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
  **/
  batchDescribeMergeConflicts(
    req: operations.BatchDescribeMergeConflictsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchDescribeMergeConflictsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchDescribeMergeConflictsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BatchDescribeMergeConflictsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchDescribeMergeConflictsOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergeOptionRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMergeOptionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxConflictFilesException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxMergeHunksException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileContentToLoadExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumItemsToCompareExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * batchDisassociateApprovalRuleTemplateFromRepositories - Removes the association between an approval rule template and one or more specified repositories. 
  **/
  batchDisassociateApprovalRuleTemplateFromRepositories(
    req: operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchDisassociateApprovalRuleTemplateFromRepositoriesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNamesRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumRepositoryNamesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * batchGetCommits - Returns information about the contents of one or more commits in a repository.
  **/
  batchGetCommits(
    req: operations.BatchGetCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchGetCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchGetCommitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.BatchGetCommits";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BatchGetCommitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchGetCommitsOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitIdsListRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitIdsLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * batchGetRepositories - <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
  **/
  batchGetRepositories(
    req: operations.BatchGetRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchGetRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchGetRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BatchGetRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchGetRepositoriesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNamesRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumRepositoryNamesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createApprovalRuleTemplate - Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
  **/
  createApprovalRuleTemplate(
    req: operations.CreateApprovalRuleTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateApprovalRuleTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateApprovalRuleTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateApprovalRuleTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createApprovalRuleTemplateOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameAlreadyExistsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateDescriptionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.numberOfRuleTemplatesExceededException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createBranch - <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
  **/
  createBranch(
    req: operations.CreateBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.CreateBranch";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateBranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameExistsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCommit - Creates a commit for a repository on the tip of a specified branch.
  **/
  createCommit(
    req: operations.CreateCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.CreateCommit";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createCommitOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentCommitIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidParentCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentCommitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentCommitIdOutdatedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameIsTagNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileEntryRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileEntriesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putFileEntryConflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sourceFileOrContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileContentAndSourceFileSpecifiedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.samePathRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folderContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidDeletionParameterException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.restrictedSourceFileException = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileModeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 505:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFileModeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 506:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidEmailException = httpRes?.data;
            }
            break;
          case httpRes?.status == 508:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitMessageLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 509:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 510:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 511:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 512:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 513:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 514:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.noChangeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 515:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileNameConflictsWithDirectoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 516:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directoryNameConflictsWithFileNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 517:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.filePathConflictsWithSubmodulePathException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createPullRequest - Creates a pull request in the specified repository.
  **/
  createPullRequest(
    req: operations.CreatePullRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePullRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePullRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.CreatePullRequest";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreatePullRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createPullRequestOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientRequestTokenRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidClientRequestTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.idempotencyParameterMismatchException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.referenceNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReferenceNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.referenceDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.referenceTypeNotSupportedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.titleRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTitleException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidDescriptionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.targetsRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTargetsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.targetRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTargetException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.multipleRepositoriesInPullRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumOpenPullRequestsExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sourceAndDestinationAreSameException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createPullRequestApprovalRule - Creates an approval rule for a pull request.
  **/
  createPullRequestApprovalRule(
    req: operations.CreatePullRequestApprovalRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePullRequestApprovalRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePullRequestApprovalRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreatePullRequestApprovalRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createPullRequestApprovalRuleOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleNameAlreadyExistsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.numberOfRulesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createRepository - Creates a new, empty repository.
  **/
  createRepository(
    req: operations.CreateRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.CreateRepository";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createRepositoryOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameExistsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryDescriptionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTagsMapException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tooManyTagsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidSystemTagUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagPolicyException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createUnreferencedMergeCommit - <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
  **/
  createUnreferencedMergeCommit(
    req: operations.CreateUnreferencedMergeCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUnreferencedMergeCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUnreferencedMergeCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateUnreferencedMergeCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createUnreferencedMergeCommitOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergeOptionRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMergeOptionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.manualMergeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumConflictResolutionEntriesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.multipleConflictResolutionEntriesException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementTypeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementTypeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folderContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileContentToLoadExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumItemsToCompareExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 505:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.concurrentReferenceUpdateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 506:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileModeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFileModeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 508:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 509:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidEmailException = httpRes?.data;
            }
            break;
          case httpRes?.status == 510:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitMessageLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 511:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 512:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 513:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 514:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 515:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteApprovalRuleTemplate - Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
  **/
  deleteApprovalRuleTemplate(
    req: operations.DeleteApprovalRuleTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteApprovalRuleTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteApprovalRuleTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteApprovalRuleTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteApprovalRuleTemplateOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteBranch - Deletes a branch from a repository, unless that branch is the default branch for the repository. 
  **/
  deleteBranch(
    req: operations.DeleteBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.DeleteBranch";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteBranchOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.defaultBranchCannotBeDeletedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCommentContent - Deletes the content of a comment made on a change, file, or commit in a repository.
  **/
  deleteCommentContent(
    req: operations.DeleteCommentContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCommentContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCommentContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCommentContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteCommentContentOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommentIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDeletedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteFile - Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
  **/
  deleteFile(
    req: operations.DeleteFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.DeleteFile";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteFileOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentCommitIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidParentCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentCommitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentCommitIdOutdatedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameIsTagNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidEmailException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitMessageLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletePullRequestApprovalRule - Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
  **/
  deletePullRequestApprovalRule(
    req: operations.DeletePullRequestApprovalRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePullRequestApprovalRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePullRequestApprovalRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePullRequestApprovalRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deletePullRequestApprovalRuleOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cannotDeleteApprovalRuleFromTemplateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRepository - <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
  **/
  deleteRepository(
    req: operations.DeleteRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.DeleteRepository";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteRepositoryOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * describeMergeConflicts - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
  **/
  describeMergeConflicts(
    req: operations.DescribeMergeConflictsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeMergeConflictsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeMergeConflictsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DescribeMergeConflictsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.describeMergeConflictsOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergeOptionRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMergeOptionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxMergeHunksException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileContentToLoadExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumItemsToCompareExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * describePullRequestEvents - Returns information about one or more pull request events.
  **/
  describePullRequestEvents(
    req: operations.DescribePullRequestEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribePullRequestEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribePullRequestEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DescribePullRequestEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.describePullRequestEventsOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestEventTypeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidActorArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actorDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxResultsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disassociateApprovalRuleTemplateFromRepository - Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
  **/
  disassociateApprovalRuleTemplateFromRepository(
    req: operations.DisassociateApprovalRuleTemplateFromRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisassociateApprovalRuleTemplateFromRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisassociateApprovalRuleTemplateFromRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DisassociateApprovalRuleTemplateFromRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * evaluatePullRequestApprovalRules - Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
  **/
  evaluatePullRequestApprovalRules(
    req: operations.EvaluatePullRequestApprovalRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EvaluatePullRequestApprovalRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EvaluatePullRequestApprovalRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EvaluatePullRequestApprovalRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.evaluatePullRequestApprovalRulesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRevisionIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revisionIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revisionNotCurrentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApprovalRuleTemplate - Returns information about a specified approval rule template.
  **/
  getApprovalRuleTemplate(
    req: operations.GetApprovalRuleTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApprovalRuleTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApprovalRuleTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApprovalRuleTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getApprovalRuleTemplateOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateDoesNotExistException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBlob - Returns the base-64 encoded content of an individual blob in a repository.
  **/
  getBlob(
    req: operations.GetBlobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBlobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBlobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetBlob";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBlobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBlobOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.blobIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBlobIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.blobIdDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileTooLargeException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBranch - Returns information about a repository branch, including its name and the last commit ID.
  **/
  getBranch(
    req: operations.GetBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetBranch";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBranchOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getComment - <p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
  **/
  getComment(
    req: operations.GetCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetComment";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCommentOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDeletedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommentIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommentReactions - Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.
  **/
  getCommentReactions(
    req: operations.GetCommentReactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommentReactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommentReactionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetCommentReactions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCommentReactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCommentReactionsOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommentIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReactionUserArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxResultsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDeletedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommentsForComparedCommit - <p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
  **/
  getCommentsForComparedCommit(
    req: operations.GetCommentsForComparedCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommentsForComparedCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommentsForComparedCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCommentsForComparedCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCommentsForComparedCommitOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxResultsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommentsForPullRequest - <p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
  **/
  getCommentsForPullRequest(
    req: operations.GetCommentsForPullRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommentsForPullRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommentsForPullRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCommentsForPullRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCommentsForPullRequestOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxResultsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNotAssociatedWithPullRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommit - Returns information about a commit, including commit message and committer information.
  **/
  getCommit(
    req: operations.GetCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetCommit";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCommitOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitIdDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDifferences - Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
  **/
  getDifferences(
    req: operations.GetDifferencesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDifferencesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDifferencesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetDifferences";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDifferencesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDifferencesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxResultsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFile - Returns the base-64 encoded contents of a specified file and its metadata.
  **/
  getFile(
    req: operations.GetFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetFile";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFileOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileTooLargeException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFolder - Returns the contents of a specified folder in a repository.
  **/
  getFolder(
    req: operations.GetFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFolderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetFolder";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFolderOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folderDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMergeCommit - Returns information about a specified merge commit.
  **/
  getMergeCommit(
    req: operations.GetMergeCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMergeCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMergeCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetMergeCommit";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMergeCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMergeCommitOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMergeConflicts - Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
  **/
  getMergeConflicts(
    req: operations.GetMergeConflictsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMergeConflictsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMergeConflictsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMergeConflictsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMergeConflictsOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergeOptionRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMergeOptionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxConflictFilesException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidDestinationCommitSpecifierException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidSourceCommitSpecifierException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileContentToLoadExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumItemsToCompareExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMergeOptions - Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
  **/
  getMergeOptions(
    req: operations.GetMergeOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMergeOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMergeOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetMergeOptions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMergeOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMergeOptionsOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileContentToLoadExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumItemsToCompareExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPullRequest - Gets information about a pull request in a specified repository.
  **/
  getPullRequest(
    req: operations.GetPullRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPullRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPullRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetPullRequest";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPullRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPullRequestOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPullRequestApprovalStates - Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
  **/
  getPullRequestApprovalStates(
    req: operations.GetPullRequestApprovalStatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPullRequestApprovalStatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPullRequestApprovalStatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPullRequestApprovalStatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPullRequestApprovalStatesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRevisionIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revisionIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPullRequestOverrideState - Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
  **/
  getPullRequestOverrideState(
    req: operations.GetPullRequestOverrideStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPullRequestOverrideStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPullRequestOverrideStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPullRequestOverrideStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPullRequestOverrideStateOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRevisionIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revisionIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRepository - <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
  **/
  getRepository(
    req: operations.GetRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetRepository";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRepositoryOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRepositoryTriggers - Gets information about triggers configured for a repository.
  **/
  getRepositoryTriggers(
    req: operations.GetRepositoryTriggersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoryTriggersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoryTriggersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoryTriggersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRepositoryTriggersOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listApprovalRuleTemplates - Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
  **/
  listApprovalRuleTemplates(
    req: operations.ListApprovalRuleTemplatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListApprovalRuleTemplatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListApprovalRuleTemplatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListApprovalRuleTemplatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listApprovalRuleTemplatesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxResultsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listAssociatedApprovalRuleTemplatesForRepository - Lists all approval rule templates that are associated with a specified repository.
  **/
  listAssociatedApprovalRuleTemplatesForRepository(
    req: operations.ListAssociatedApprovalRuleTemplatesForRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAssociatedApprovalRuleTemplatesForRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAssociatedApprovalRuleTemplatesForRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListAssociatedApprovalRuleTemplatesForRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAssociatedApprovalRuleTemplatesForRepositoryOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxResultsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listBranches - Gets information about one or more branches in a repository.
  **/
  listBranches(
    req: operations.ListBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBranchesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.ListBranches";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListBranchesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listBranchesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listPullRequests - Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
  **/
  listPullRequests(
    req: operations.ListPullRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPullRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPullRequestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.ListPullRequests";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListPullRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listPullRequestsOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestStatusException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidAuthorArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxResultsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listRepositories - Gets information about one or more repositories.
  **/
  listRepositories(
    req: operations.ListRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.ListRepositories";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listRepositoriesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidSortByException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidOrderException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listRepositoriesForApprovalRuleTemplate - Lists all repositories associated with the specified approval rule template.
  **/
  listRepositoriesForApprovalRuleTemplate(
    req: operations.ListRepositoriesForApprovalRuleTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRepositoriesForApprovalRuleTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRepositoriesForApprovalRuleTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListRepositoriesForApprovalRuleTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listRepositoriesForApprovalRuleTemplateOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMaxResultsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidContinuationTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTagsForResource - Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
  **/
  listTagsForResource(
    req: operations.ListTagsForResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTagsForResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTagsForResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.ListTagsForResource";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListTagsForResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTagsForResourceOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceArnRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidResourceArnException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mergeBranchesByFastForward - Merges two branches using the fast-forward merge strategy.
  **/
  mergeBranchesByFastForward(
    req: operations.MergeBranchesByFastForwardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MergeBranchesByFastForwardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergeBranchesByFastForwardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MergeBranchesByFastForwardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergeBranchesByFastForwardOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTargetBranchException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameIsTagNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.manualMergeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.concurrentReferenceUpdateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mergeBranchesBySquash - Merges two branches using the squash merge strategy.
  **/
  mergeBranchesBySquash(
    req: operations.MergeBranchesBySquashRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MergeBranchesBySquashResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergeBranchesBySquashRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MergeBranchesBySquashResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergeBranchesBySquashOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTargetBranchException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameIsTagNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.manualMergeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumConflictResolutionEntriesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.multipleConflictResolutionEntriesException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementTypeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementTypeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 505:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folderContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 506:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileContentToLoadExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumItemsToCompareExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 508:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileModeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 509:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFileModeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 510:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 511:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidEmailException = httpRes?.data;
            }
            break;
          case httpRes?.status == 512:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitMessageLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 513:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.concurrentReferenceUpdateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 514:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 515:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 516:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 517:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 518:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mergeBranchesByThreeWay - Merges two specified branches using the three-way merge strategy.
  **/
  mergeBranchesByThreeWay(
    req: operations.MergeBranchesByThreeWayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MergeBranchesByThreeWayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergeBranchesByThreeWayRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MergeBranchesByThreeWayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergeBranchesByThreeWayOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTargetBranchException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameIsTagNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.manualMergeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.concurrentReferenceUpdateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumConflictResolutionEntriesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.multipleConflictResolutionEntriesException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementTypeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementTypeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 505:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 506:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folderContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileContentToLoadExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 508:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumItemsToCompareExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 509:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileModeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 510:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFileModeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 511:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 512:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidEmailException = httpRes?.data;
            }
            break;
          case httpRes?.status == 513:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitMessageLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 514:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 515:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 516:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 517:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 518:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mergePullRequestByFastForward - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
  **/
  mergePullRequestByFastForward(
    req: operations.MergePullRequestByFastForwardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MergePullRequestByFastForwardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergePullRequestByFastForwardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MergePullRequestByFastForwardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergePullRequestByFastForwardOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.manualMergeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipOfSourceReferenceIsDifferentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.referenceDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNotAssociatedWithPullRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.concurrentReferenceUpdateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestApprovalRulesNotSatisfiedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mergePullRequestBySquash - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
  **/
  mergePullRequestBySquash(
    req: operations.MergePullRequestBySquashRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MergePullRequestBySquashResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergePullRequestBySquashRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MergePullRequestBySquashResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergePullRequestBySquashOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.manualMergeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipOfSourceReferenceIsDifferentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidEmailException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitMessageLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementTypeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementTypeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.multipleConflictResolutionEntriesException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumConflictResolutionEntriesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.concurrentReferenceUpdateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFileModeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 505:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folderContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 506:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileContentToLoadExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumItemsToCompareExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 508:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 509:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 510:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 511:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNotAssociatedWithPullRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 512:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestApprovalRulesNotSatisfiedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 513:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 514:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 515:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 516:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 517:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mergePullRequestByThreeWay - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
  **/
  mergePullRequestByThreeWay(
    req: operations.MergePullRequestByThreeWayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MergePullRequestByThreeWayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergePullRequestByThreeWayRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MergePullRequestByThreeWayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mergePullRequestByThreeWayOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.manualMergeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipOfSourceReferenceIsDifferentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tipsDivergenceExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidEmailException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitMessageLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictDetailLevelException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionStrategyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidConflictResolutionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementTypeRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementTypeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.multipleConflictResolutionEntriesException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replacementContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumConflictResolutionEntriesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFileModeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReplacementContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folderContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 505:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumFileContentToLoadExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 506:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumItemsToCompareExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 508:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 509:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 510:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNotAssociatedWithPullRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 511:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.concurrentReferenceUpdateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 512:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestApprovalRulesNotSatisfiedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 513:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 514:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 515:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 516:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 517:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * overridePullRequestApprovalRules - Sets aside (overrides) all approval rule requirements for a specified pull request.
  **/
  overridePullRequestApprovalRules(
    req: operations.OverridePullRequestApprovalRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OverridePullRequestApprovalRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OverridePullRequestApprovalRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OverridePullRequestApprovalRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRevisionIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revisionIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidOverrideStatusException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.overrideStatusRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.overrideAlreadySetException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revisionNotCurrentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postCommentForComparedCommit - Posts a comment on the comparison between two commits.
  **/
  postCommentForComparedCommit(
    req: operations.PostCommentForComparedCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCommentForComparedCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCommentForComparedCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCommentForComparedCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postCommentForComparedCommitOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientRequestTokenRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidClientRequestTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.idempotencyParameterMismatchException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFileLocationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRelativeFileVersionEnumException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFilePositionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.beforeCommitIdAndAfterCommitIdAreSameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postCommentForPullRequest - Posts a comment on a pull request.
  **/
  postCommentForPullRequest(
    req: operations.PostCommentForPullRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCommentForPullRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCommentForPullRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCommentForPullRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postCommentForPullRequestOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNotAssociatedWithPullRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientRequestTokenRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidClientRequestTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.idempotencyParameterMismatchException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFileLocationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRelativeFileVersionEnumException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFilePositionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.beforeCommitIdAndAfterCommitIdAreSameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 505:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 506:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postCommentReply - Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
  **/
  postCommentReply(
    req: operations.PostCommentReplyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCommentReplyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCommentReplyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.PostCommentReply";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCommentReplyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postCommentReplyOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientRequestTokenRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidClientRequestTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.idempotencyParameterMismatchException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommentIdException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putCommentReaction - Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.
  **/
  putCommentReaction(
    req: operations.PutCommentReactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCommentReactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCommentReactionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.PutCommentReaction";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutCommentReactionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommentIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidReactionValueException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionValueRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDeletedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putFile - Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
  **/
  putFile(
    req: operations.PutFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.PutFile";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putFileOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentCommitIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidParentCommitIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentCommitDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentCommitIdOutdatedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folderContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pathRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPathException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameIsTagNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidFileModeException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidEmailException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitMessageLengthExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidDeletionParameterException = httpRes?.data;
            }
            break;
          case httpRes?.status == 501:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 505:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 506:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sameFileContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileNameConflictsWithDirectoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 508:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directoryNameConflictsWithFileNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 509:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.filePathConflictsWithSubmodulePathException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRepositoryTriggers - Replaces all triggers for a repository. Used to create or delete triggers.
  **/
  putRepositoryTriggers(
    req: operations.PutRepositoryTriggersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoryTriggersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoryTriggersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRepositoryTriggersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putRepositoryTriggersOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggersListRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumRepositoryTriggersExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerDestinationArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerRegionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerCustomDataException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumBranchesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerEventsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggerNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggerDestinationArnRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggerBranchNameListRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggerEventsListRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagResource - Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
  **/
  tagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.TagResource";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceArnRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidResourceArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagsMapRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTagsMapException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tooManyTagsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidSystemTagUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagPolicyException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * testRepositoryTriggers - Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
  **/
  testRepositoryTriggers(
    req: operations.TestRepositoryTriggersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestRepositoryTriggersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestRepositoryTriggersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestRepositoryTriggersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.testRepositoryTriggersOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggersListRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumRepositoryTriggersExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerDestinationArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerRegionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerCustomDataException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumBranchesExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryTriggerEventsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggerNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggerDestinationArnRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggerBranchNameListRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryTriggerEventsListRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 496:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 497:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 498:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 499:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * untagResource - Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
  **/
  untagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UntagResource";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UntagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceArnRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidResourceArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagKeysListRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTagKeysListException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tooManyTagsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidSystemTagUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagPolicyException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateApprovalRuleTemplateContent - Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
  **/
  updateApprovalRuleTemplateContent(
    req: operations.UpdateApprovalRuleTemplateContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateApprovalRuleTemplateContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateApprovalRuleTemplateContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateApprovalRuleTemplateContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateApprovalRuleTemplateContentOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRuleContentSha256Exception = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateContentRequiredException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateApprovalRuleTemplateDescription - Updates the description for a specified approval rule template.
  **/
  updateApprovalRuleTemplateDescription(
    req: operations.UpdateApprovalRuleTemplateDescriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateApprovalRuleTemplateDescriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateApprovalRuleTemplateDescriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateApprovalRuleTemplateDescriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateApprovalRuleTemplateDescriptionOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateDescriptionException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateApprovalRuleTemplateName - Updates the name of a specified approval rule template.
  **/
  updateApprovalRuleTemplateName(
    req: operations.UpdateApprovalRuleTemplateNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateApprovalRuleTemplateNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateApprovalRuleTemplateNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateApprovalRuleTemplateNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateApprovalRuleTemplateNameOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleTemplateNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleTemplateNameAlreadyExistsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateComment - Replaces the contents of a comment.
  **/
  updateComment(
    req: operations.UpdateCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdateComment";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateCommentOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentContentSizeLimitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCommentIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentNotCreatedByCallerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentDeletedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDefaultBranch - <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
  **/
  updateDefaultBranch(
    req: operations.UpdateDefaultBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDefaultBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDefaultBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateDefaultBranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidBranchNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePullRequestApprovalRuleContent - Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 
  **/
  updatePullRequestApprovalRuleContent(
    req: operations.UpdatePullRequestApprovalRuleContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePullRequestApprovalRuleContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePullRequestApprovalRuleContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePullRequestApprovalRuleContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updatePullRequestApprovalRuleContentOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRuleContentSha256Exception = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalRuleContentRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalRuleContentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cannotModifyApprovalRuleFromTemplateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePullRequestApprovalState - Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
  **/
  updatePullRequestApprovalState(
    req: operations.UpdatePullRequestApprovalStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePullRequestApprovalStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePullRequestApprovalStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePullRequestApprovalStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRevisionIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revisionIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidApprovalStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.approvalStateRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestCannotBeApprovedByAuthorException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revisionNotCurrentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maximumNumberOfApprovalsExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 491:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 492:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 493:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 494:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 495:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePullRequestDescription - Replaces the contents of the description of a pull request.
  **/
  updatePullRequestDescription(
    req: operations.UpdatePullRequestDescriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePullRequestDescriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePullRequestDescriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePullRequestDescriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updatePullRequestDescriptionOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidDescriptionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePullRequestStatus - Updates the status of a pull request. 
  **/
  updatePullRequestStatus(
    req: operations.UpdatePullRequestStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePullRequestStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePullRequestStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePullRequestStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updatePullRequestStatusOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestStatusUpdateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestStatusException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestStatusRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 490:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePullRequestTitle - Replaces the title of a pull request.
  **/
  updatePullRequestTitle(
    req: operations.UpdatePullRequestTitleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePullRequestTitleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePullRequestTitleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePullRequestTitleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updatePullRequestTitleOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidPullRequestIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestIdRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.titleRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidTitleException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestAlreadyClosedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateRepositoryDescription - <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
  **/
  updateRepositoryDescription(
    req: operations.UpdateRepositoryDescriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRepositoryDescriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRepositoryDescriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateRepositoryDescriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryDescriptionException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionIntegrityChecksFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyDisabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptionKeyUnavailableException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateRepositoryName - Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.
  **/
  updateRepositoryName(
    req: operations.UpdateRepositoryNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRepositoryNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRepositoryNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateRepositoryNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryDoesNotExistException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameExistsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryNameRequiredException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidRepositoryNameException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
