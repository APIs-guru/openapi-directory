import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentDefinitionsDeleteContentDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionID" })
  contentDefinitionId: number;
}


export class ContentDefinitionsDeleteContentDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentDefinitionsDeleteContentDefinitionPathParams;
}


export class ContentDefinitionsDeleteContentDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
