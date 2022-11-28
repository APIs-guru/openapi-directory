import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStudioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StudioId" })
  studioId: string;
}
