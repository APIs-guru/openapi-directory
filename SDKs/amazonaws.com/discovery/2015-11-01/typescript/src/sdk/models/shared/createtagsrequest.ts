import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationIds" })
  configurationIds: string[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags: Tag[];
}
