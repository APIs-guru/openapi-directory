import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { FindingSource } from "./findingsource";
import { FindingStatusEnum } from "./findingstatusenum";
/**
 * Contains information about a finding.
**/
export declare class FindingSummary extends SpeakeasyBase {
    action?: string[];
    analyzedAt: Date;
    condition: Map<string, string>;
    createdAt: Date;
    error?: string;
    id: string;
    isPublic?: boolean;
    principal?: Map<string, string>;
    resource?: string;
    resourceOwnerAccount: string;
    resourceType: ResourceTypeEnum;
    sources?: FindingSource[];
    status: FindingStatusEnum;
    updatedAt: Date;
}
