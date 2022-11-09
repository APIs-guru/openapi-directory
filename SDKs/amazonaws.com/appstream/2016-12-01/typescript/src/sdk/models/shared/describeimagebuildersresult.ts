import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageBuilder } from "./imagebuilder";


export class DescribeImageBuildersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageBuilders", elemType: shared.ImageBuilder })
  imageBuilders?: ImageBuilder[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
