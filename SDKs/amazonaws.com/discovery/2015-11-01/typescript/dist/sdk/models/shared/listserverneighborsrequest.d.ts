import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListServerNeighborsRequest extends SpeakeasyBase {
    configurationId: string;
    maxResults?: number;
    neighborConfigurationIds?: string[];
    nextToken?: string;
    portInformationNeeded?: boolean;
}
