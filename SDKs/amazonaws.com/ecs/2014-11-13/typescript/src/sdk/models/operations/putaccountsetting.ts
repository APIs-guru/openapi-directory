import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutAccountSettingXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAccountSetting = "AmazonEC2ContainerServiceV20141113.PutAccountSetting"
}


export class PutAccountSettingHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutAccountSettingXAmzTargetEnum;
}


export class PutAccountSettingRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAccountSettingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutAccountSettingRequest;
}


export class PutAccountSettingResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  putAccountSettingResponse?: shared.PutAccountSettingResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
