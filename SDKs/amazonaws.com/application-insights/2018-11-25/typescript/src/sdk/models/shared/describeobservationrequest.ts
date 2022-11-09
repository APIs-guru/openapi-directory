import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeObservationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObservationId" })
  observationId: string;
}
