import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDomainAssociationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class CreateDomainAssociationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class CreateDomainAssociationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoSubDomainCreationPatterns" })
  autoSubDomainCreationPatterns?: string[];

  @Metadata({ data: "json, name=autoSubDomainIAMRole" })
  autoSubDomainIamRole?: string;

  @Metadata({ data: "json, name=domainName" })
  domainName: string;

  @Metadata({ data: "json, name=enableAutoSubDomain" })
  enableAutoSubDomain?: boolean;

  @Metadata({ data: "json, name=subDomainSettings", elemType: shared.SubDomainSetting })
  subDomainSettings: shared.SubDomainSetting[];
}


export class CreateDomainAssociationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDomainAssociationPathParams;

  @Metadata()
  headers: CreateDomainAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDomainAssociationRequestBody;
}


export class CreateDomainAssociationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDomainAssociationResult?: shared.CreateDomainAssociationResult;

  @Metadata()
  dependentServiceFailureException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
