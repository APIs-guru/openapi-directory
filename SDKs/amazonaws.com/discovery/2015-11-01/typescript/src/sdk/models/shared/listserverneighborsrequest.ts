import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListServerNeighborsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationId" })
  configurationId: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=neighborConfigurationIds" })
  neighborConfigurationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=portInformationNeeded" })
  portInformationNeeded?: boolean;
}
