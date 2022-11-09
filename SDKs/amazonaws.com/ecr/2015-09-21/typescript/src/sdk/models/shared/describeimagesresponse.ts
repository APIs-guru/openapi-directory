import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageDetail } from "./imagedetail";


export class DescribeImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageDetails", elemType: shared.ImageDetail })
  imageDetails?: ImageDetail[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
