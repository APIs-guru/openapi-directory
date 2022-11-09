import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NestingLevelValueEnum } from "./nestinglevelvalueenum";
/**
 * Provides information that defines a DocumentDB endpoint.
**/
export declare class DocDbSettings extends SpeakeasyBase {
    databaseName?: string;
    docsToInvestigate?: number;
    extractDocId?: boolean;
    kmsKeyId?: string;
    nestingLevel?: NestingLevelValueEnum;
    password?: string;
    port?: number;
    secretsManagerAccessRoleArn?: string;
    secretsManagerSecretId?: string;
    serverName?: string;
    username?: string;
}
