import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAddonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=addonName" })
  addonName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class UpdateAddonHeaders extends SpeakeasyBase {
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

export enum UpdateAddonRequestBodyResolveConflictsEnum {
    Overwrite = "OVERWRITE"
,    None = "NONE"
}


export class UpdateAddonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=addonVersion" })
  addonVersion?: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=resolveConflicts" })
  resolveConflicts?: UpdateAddonRequestBodyResolveConflictsEnum;

  @Metadata({ data: "json, name=serviceAccountRoleArn" })
  serviceAccountRoleArn?: string;
}


export class UpdateAddonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAddonPathParams;

  @Metadata()
  headers: UpdateAddonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAddonRequestBody;
}


export class UpdateAddonResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAddonResponse?: shared.UpdateAddonResponse;
}
