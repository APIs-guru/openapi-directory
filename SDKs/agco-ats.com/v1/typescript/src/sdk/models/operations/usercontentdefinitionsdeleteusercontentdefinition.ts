import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserContentDefinitionsDeleteUserContentDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userContentDefinitionID" })
  userContentDefinitionId: number;
}


export class UserContentDefinitionsDeleteUserContentDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserContentDefinitionsDeleteUserContentDefinitionPathParams;
}


export class UserContentDefinitionsDeleteUserContentDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
