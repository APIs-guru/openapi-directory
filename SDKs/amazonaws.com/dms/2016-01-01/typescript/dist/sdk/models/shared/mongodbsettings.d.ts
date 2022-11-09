import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthMechanismValueEnum } from "./authmechanismvalueenum";
import { AuthTypeValueEnum } from "./authtypevalueenum";
import { NestingLevelValueEnum } from "./nestinglevelvalueenum";
/**
 * Provides information that defines a MongoDB endpoint.
**/
export declare class MongoDbSettings extends SpeakeasyBase {
    authMechanism?: AuthMechanismValueEnum;
    authSource?: string;
    authType?: AuthTypeValueEnum;
    databaseName?: string;
    docsToInvestigate?: string;
    extractDocId?: string;
    kmsKeyId?: string;
    nestingLevel?: NestingLevelValueEnum;
    password?: string;
    port?: number;
    secretsManagerAccessRoleArn?: string;
    secretsManagerSecretId?: string;
    serverName?: string;
    username?: string;
}
