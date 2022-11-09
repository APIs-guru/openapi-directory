import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListServerNeighborsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationId" })
  configurationId: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=neighborConfigurationIds" })
  neighborConfigurationIds?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=portInformationNeeded" })
  portInformationNeeded?: boolean;
}
