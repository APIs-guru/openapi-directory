import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutAccountSettingDefaultXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAccountSettingDefault = "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault"
}


export class PutAccountSettingDefaultHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutAccountSettingDefaultXAmzTargetEnum;
}


export class PutAccountSettingDefaultRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAccountSettingDefaultHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutAccountSettingDefaultRequest;
}


export class PutAccountSettingDefaultResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  putAccountSettingDefaultResponse?: shared.PutAccountSettingDefaultResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
