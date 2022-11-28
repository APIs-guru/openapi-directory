import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";



export class DescribeIcd10CmInferenceJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComprehendMedicalAsyncJobProperties" })
  comprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
