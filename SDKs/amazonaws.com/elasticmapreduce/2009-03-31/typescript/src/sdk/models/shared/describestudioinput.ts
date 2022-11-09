import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeStudioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StudioId" })
  studioId: string;
}
