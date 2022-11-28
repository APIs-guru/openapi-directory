import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
**/
export declare class StartReplicationTaskAssessmentRunMessage extends SpeakeasyBase {
    assessmentRunName: string;
    exclude?: string[];
    includeOnly?: string[];
    replicationTaskArn: string;
    resultEncryptionMode?: string;
    resultKmsKeyArn?: string;
    resultLocationBucket: string;
    resultLocationFolder?: string;
    serviceAccessRoleArn: string;
}
