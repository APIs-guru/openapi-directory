import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentDefinitionsDeleteContentDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionID" })
  contentDefinitionId: number;
}


export class ContentDefinitionsDeleteContentDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentDefinitionsDeleteContentDefinitionPathParams;
}


export class ContentDefinitionsDeleteContentDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
