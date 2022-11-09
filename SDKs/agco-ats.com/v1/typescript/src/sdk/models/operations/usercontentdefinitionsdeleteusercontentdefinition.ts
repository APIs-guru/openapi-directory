import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserContentDefinitionsDeleteUserContentDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userContentDefinitionID" })
  userContentDefinitionId: number;
}


export class UserContentDefinitionsDeleteUserContentDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserContentDefinitionsDeleteUserContentDefinitionPathParams;
}


export class UserContentDefinitionsDeleteUserContentDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
