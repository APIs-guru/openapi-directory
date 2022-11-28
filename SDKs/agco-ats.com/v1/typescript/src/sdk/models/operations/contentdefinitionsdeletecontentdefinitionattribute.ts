import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentDefinitionsDeleteContentDefinitionAttributePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionAttributeID" })
  contentDefinitionAttributeId: number;
}


export class ContentDefinitionsDeleteContentDefinitionAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentDefinitionsDeleteContentDefinitionAttributePathParams;
}


export class ContentDefinitionsDeleteContentDefinitionAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
