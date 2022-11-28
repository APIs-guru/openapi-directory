import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetHealthDescription } from "./targethealthdescription";



export class DescribeTargetHealthOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TargetHealthDescription })
  targetHealthDescriptions?: TargetHealthDescription[];
}
