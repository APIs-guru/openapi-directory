import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Image } from "./image";


export class DescribeImagesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Images", elemType: shared.Image })
  images?: Image[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
