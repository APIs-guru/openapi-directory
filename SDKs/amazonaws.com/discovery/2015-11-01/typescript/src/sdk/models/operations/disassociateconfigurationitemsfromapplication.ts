import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DisassociateConfigurationItemsFromApplicationXAmzTargetEnum {
    AwsPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication = "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication"
}


export class DisassociateConfigurationItemsFromApplicationHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DisassociateConfigurationItemsFromApplicationXAmzTargetEnum;
}


export class DisassociateConfigurationItemsFromApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DisassociateConfigurationItemsFromApplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateConfigurationItemsFromApplicationRequest;
}


export class DisassociateConfigurationItemsFromApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorizationErrorException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disassociateConfigurationItemsFromApplicationResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  homeRegionNotSetException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  serverInternalErrorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
