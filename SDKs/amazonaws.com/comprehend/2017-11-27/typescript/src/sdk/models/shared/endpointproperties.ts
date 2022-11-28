import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";



// EndpointProperties
/** 
 * Specifies information about the specified endpoint.
**/
export class EndpointProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CurrentInferenceUnits" })
  currentInferenceUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DesiredInferenceUnits" })
  desiredInferenceUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EndpointStatusEnum;
}
