import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDomainConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainConfigurationName" })
  domainConfigurationName: string;
}


export class DeleteDomainConfigurationHeaders extends SpeakeasyBase {
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


export class DeleteDomainConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDomainConfigurationPathParams;

  @Metadata()
  headers: DeleteDomainConfigurationHeaders;
}


export class DeleteDomainConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDomainConfigurationResponse?: Map<string, any>;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
