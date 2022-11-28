import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";



export class ListRxNormInferenceJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComprehendMedicalAsyncJobPropertiesList", elemType: ComprehendMedicalAsyncJobProperties })
  comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
