import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAddonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=addonName" })
  addonName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class UpdateAddonHeaders extends SpeakeasyBase {
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

export enum UpdateAddonRequestBodyResolveConflictsEnum {
    Overwrite = "OVERWRITE",
    None = "NONE"
}


export class UpdateAddonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addonVersion" })
  addonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resolveConflicts" })
  resolveConflicts?: UpdateAddonRequestBodyResolveConflictsEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountRoleArn" })
  serviceAccountRoleArn?: string;
}


export class UpdateAddonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAddonPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAddonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAddonRequestBody;
}


export class UpdateAddonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAddonResponse?: shared.UpdateAddonResponse;
}
