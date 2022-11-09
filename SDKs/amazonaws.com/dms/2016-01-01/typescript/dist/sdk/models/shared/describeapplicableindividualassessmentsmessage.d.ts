import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
/**
 * <p/>
**/
export declare class DescribeApplicableIndividualAssessmentsMessage extends SpeakeasyBase {
    marker?: string;
    maxRecords?: number;
    migrationType?: MigrationTypeValueEnum;
    replicationInstanceArn?: string;
    replicationTaskArn?: string;
    sourceEngineName?: string;
    targetEngineName?: string;
}
