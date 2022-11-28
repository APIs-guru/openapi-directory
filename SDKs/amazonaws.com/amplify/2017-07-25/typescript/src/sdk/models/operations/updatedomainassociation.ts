import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDomainAssociationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class UpdateDomainAssociationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class UpdateDomainAssociationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoSubDomainCreationPatterns" })
  autoSubDomainCreationPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=autoSubDomainIAMRole" })
  autoSubDomainIamRole?: string;

  @SpeakeasyMetadata({ data: "json, name=enableAutoSubDomain" })
  enableAutoSubDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subDomainSettings", elemType: shared.SubDomainSetting })
  subDomainSettings: shared.SubDomainSetting[];
}


export class UpdateDomainAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDomainAssociationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateDomainAssociationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDomainAssociationRequestBody;
}


export class UpdateDomainAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependentServiceFailureException?: any;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateDomainAssociationResult?: shared.UpdateDomainAssociationResult;
}
