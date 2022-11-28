import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageBuilder } from "./imagebuilder";



export class DescribeImageBuildersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageBuilders", elemType: ImageBuilder })
  imageBuilders?: ImageBuilder[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
