import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://cal-test.adyen.com/cal/services/Account/v3",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // PostCloseAccount - Close an account.
  /** 
   * Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments will be directed to your liable account.
  **/
  PostCloseAccount(
    req: operations.PostCloseAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCloseAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCloseAccountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/closeAccount";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostCloseAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.closeAccountResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.closeAccountResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostCloseAccountHolder - Close an account holder.
  /** 
   * Changes the [status of an account holder](https://docs.adyen.com/platforms/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** status,the payments will be directed to your liable account.
  **/
  PostCloseAccountHolder(
    req: operations.PostCloseAccountHolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCloseAccountHolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCloseAccountHolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/closeAccountHolder";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostCloseAccountHolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.closeAccountHolderResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.closeAccountHolderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostCreateAccount - Create a new account.
  /** 
   * Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/platforms/account-holders-and-accounts#create-additional-accounts).
  **/
  PostCreateAccount(
    req: operations.PostCreateAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCreateAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCreateAccountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/createAccount";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostCreateAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createAccountResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.createAccountResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostCreateAccountHolder - Create a new account holder.
  /** 
   * Creates an account holder, which [represents the sub-merchant's entity](https://docs.adyen.com/platforms/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/platforms/account-holders-and-accounts#legal-entity-types).
  **/
  PostCreateAccountHolder(
    req: operations.PostCreateAccountHolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCreateAccountHolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCreateAccountHolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/createAccountHolder";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostCreateAccountHolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createAccountHolderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostDeleteBankAccounts - Delete bank accounts.
  /** 
   * Deletes one or more bank accounts of an account holder. 
  **/
  PostDeleteBankAccounts(
    req: operations.PostDeleteBankAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDeleteBankAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDeleteBankAccountsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/deleteBankAccounts";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostDeleteBankAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostDeleteShareholders - Delete shareholders.
  /** 
   * Deletes one or more shareholders from an account holder.
  **/
  PostDeleteShareholders(
    req: operations.PostDeleteShareholdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDeleteShareholdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDeleteShareholdersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/deleteShareholders";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostDeleteShareholdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostDeleteSignatories - Delete signatories.
  /** 
   * Deletes one or more signatories from an account holder.
  **/
  PostDeleteSignatories(
    req: operations.PostDeleteSignatoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDeleteSignatoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDeleteSignatoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/deleteSignatories";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostDeleteSignatoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostGetAccountHolder - Get an account holder.
  /** 
   * Retrieves the details of an account holder.
  **/
  PostGetAccountHolder(
    req: operations.PostGetAccountHolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostGetAccountHolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostGetAccountHolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getAccountHolder";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostGetAccountHolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccountHolderResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccountHolderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostGetTaxForm - Get a tax form.
  /** 
   * Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/platforms/tax-forms).
  **/
  PostGetTaxForm(
    req: operations.PostGetTaxFormRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostGetTaxFormResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostGetTaxFormRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getTaxForm";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostGetTaxFormResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTaxFormResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostGetUploadedDocuments - Get documents.
  /** 
   * Retrieves documents that were previously uploaded for an account holder. Adyen uses the documents in the [KYC verification checks](https://docs.adyen.com/platforms/verification-checks).
   * 
  **/
  PostGetUploadedDocuments(
    req: operations.PostGetUploadedDocumentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostGetUploadedDocumentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostGetUploadedDocumentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getUploadedDocuments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostGetUploadedDocumentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getUploadedDocumentsResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSuspendAccountHolder - Suspend an account holder.
  /** 
   * Changes the [status of an account holder](https://docs.adyen.com/platforms/account-holders-and-accounts#account-holder-statuses) to **Suspended**.
  **/
  PostSuspendAccountHolder(
    req: operations.PostSuspendAccountHolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSuspendAccountHolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSuspendAccountHolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/suspendAccountHolder";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostSuspendAccountHolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.suspendAccountHolderResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.suspendAccountHolderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUnSuspendAccountHolder - Unsuspend an account holder.
  /** 
   * Changes the [status of an account holder](https://docs.adyen.com/platforms/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. Account holders can have a **Suspended** status if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a KYC deadline expires.
   * 
   * You can only unsuspend account holders if they _do not_ have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).
  **/
  PostUnSuspendAccountHolder(
    req: operations.PostUnSuspendAccountHolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUnSuspendAccountHolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUnSuspendAccountHolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/unSuspendAccountHolder";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUnSuspendAccountHolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.unSuspendAccountHolderResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.unSuspendAccountHolderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUpdateAccount - Update an account.
  /** 
   * Updates the description or payout schedule of an account.
  **/
  PostUpdateAccount(
    req: operations.PostUpdateAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdateAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdateAccountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/updateAccount";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUpdateAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateAccountResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateAccountResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUpdateAccountHolder - Update an account holder.
  /** 
   * Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.
   * 
   * When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the objects below.
   * 
   * * `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes along with other existing key-value pairs.
   * 
   * When updating any field in the following objects, you must submit all the fields required for validation.
   * 
   *  * `address`
   * 
   * * `fullPhoneNumber`
   * 
   * * `bankAccountDetails.BankAccountDetail`
   * 
   * * `businessDetails.shareholders.ShareholderContact`
   * 
   *  For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.
   * 
   * To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.
   * 
   * 
  **/
  PostUpdateAccountHolder(
    req: operations.PostUpdateAccountHolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdateAccountHolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdateAccountHolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/updateAccountHolder";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUpdateAccountHolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateAccountHolderResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateAccountHolderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUpdateAccountHolderState - Update payout or processing state.
  /** 
   * Disables or enables the processing or payout state of an account holder.
  **/
  PostUpdateAccountHolderState(
    req: operations.PostUpdateAccountHolderStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdateAccountHolderStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdateAccountHolderStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/updateAccountHolderState";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUpdateAccountHolderStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccountHolderStatusResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccountHolderStatusResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUploadDocument - Upload a document.
  /** 
   * Uploads a document for an account holder. Adyen uses the documents in the [KYC verification checks](https://docs.adyen.com/platforms/verification-checks).
  **/
  PostUploadDocument(
    req: operations.PostUploadDocumentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUploadDocumentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUploadDocumentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/uploadDocument";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUploadDocumentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateAccountHolderResponse = httpRes?.data;
            }
            break;
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateAccountHolderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
