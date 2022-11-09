import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageTagDetail } from "./imagetagdetail";


export class DescribeImageTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageTagDetails", elemType: shared.ImageTagDetail })
  imageTagDetails?: ImageTagDetail[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
