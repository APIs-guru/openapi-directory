import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTagDetail } from "./imagetagdetail";



export class DescribeImageTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageTagDetails", elemType: ImageTagDetail })
  imageTagDetails?: ImageTagDetail[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
