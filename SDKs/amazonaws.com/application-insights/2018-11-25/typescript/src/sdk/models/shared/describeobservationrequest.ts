import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeObservationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObservationId" })
  observationId: string;
}
