import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";


// EndpointProperties
/** 
 * Specifies information about the specified endpoint.
**/
export class EndpointProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=CurrentInferenceUnits" })
  currentInferenceUnits?: number;

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @Metadata({ data: "json, name=DesiredInferenceUnits" })
  desiredInferenceUnits?: number;

  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: EndpointStatusEnum;
}
