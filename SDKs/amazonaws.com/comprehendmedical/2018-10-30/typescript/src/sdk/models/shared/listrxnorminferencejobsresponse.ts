import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComprehendMedicalAsyncJobProperties } from "./comprehendmedicalasyncjobproperties";


export class ListRxNormInferenceJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComprehendMedicalAsyncJobPropertiesList", elemType: shared.ComprehendMedicalAsyncJobProperties })
  comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
