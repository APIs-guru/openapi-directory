import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { FindingStatusEnum } from "./findingstatusenum";
/**
 * Contains details about the analyzed resource.
**/
export declare class AnalyzedResource extends SpeakeasyBase {
    actions?: string[];
    analyzedAt: Date;
    createdAt: Date;
    error?: string;
    isPublic: boolean;
    resourceArn: string;
    resourceOwnerAccount: string;
    resourceType: ResourceTypeEnum;
    sharedVia?: string[];
    status?: FindingStatusEnum;
    updatedAt: Date;
}
