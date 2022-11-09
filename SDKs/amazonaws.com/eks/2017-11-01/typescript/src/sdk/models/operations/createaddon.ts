import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAddonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CreateAddonHeaders extends SpeakeasyBase {
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

export enum CreateAddonRequestBodyResolveConflictsEnum {
    Overwrite = "OVERWRITE"
,    None = "NONE"
}


export class CreateAddonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=addonName" })
  addonName: string;

  @Metadata({ data: "json, name=addonVersion" })
  addonVersion?: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=resolveConflicts" })
  resolveConflicts?: CreateAddonRequestBodyResolveConflictsEnum;

  @Metadata({ data: "json, name=serviceAccountRoleArn" })
  serviceAccountRoleArn?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateAddonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAddonPathParams;

  @Metadata()
  headers: CreateAddonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAddonRequestBody;
}


export class CreateAddonResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAddonResponse?: shared.CreateAddonResponse;

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
}
