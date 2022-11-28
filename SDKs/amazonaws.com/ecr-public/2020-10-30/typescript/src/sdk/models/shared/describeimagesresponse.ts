import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageDetail } from "./imagedetail";



export class DescribeImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageDetails", elemType: ImageDetail })
  imageDetails?: ImageDetail[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
