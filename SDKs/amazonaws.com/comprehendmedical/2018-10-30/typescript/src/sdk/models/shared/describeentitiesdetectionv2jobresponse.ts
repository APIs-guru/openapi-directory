import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";



export class DescribeEntitiesDetectionV2JobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComprehendMedicalAsyncJobProperties" })
  comprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
