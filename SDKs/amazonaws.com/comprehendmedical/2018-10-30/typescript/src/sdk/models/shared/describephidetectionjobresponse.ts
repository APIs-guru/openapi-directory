import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";



export class DescribePhiDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComprehendMedicalAsyncJobProperties" })
  comprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
