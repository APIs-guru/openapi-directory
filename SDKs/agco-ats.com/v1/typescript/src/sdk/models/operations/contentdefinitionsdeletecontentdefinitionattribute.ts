import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentDefinitionsDeleteContentDefinitionAttributePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionAttributeID" })
  contentDefinitionAttributeId: number;
}


export class ContentDefinitionsDeleteContentDefinitionAttributeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentDefinitionsDeleteContentDefinitionAttributePathParams;
}


export class ContentDefinitionsDeleteContentDefinitionAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
