import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";


export class DescribeRxNormInferenceJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComprehendMedicalAsyncJobProperties" })
  comprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
