import { SpeakeasyBase } from "../../../internal/utils";
import { EntityInfo } from "./entityinfo";
/**
 * <p>An object that contains details about when the IAM entities (users or roles) were last used in an attempt to access the specified Amazon Web Services service.</p> <p>This data type is a response element in the <a>GetServiceLastAccessedDetailsWithEntities</a> operation.</p>
**/
export declare class EntityDetails extends SpeakeasyBase {
    entityInfo: EntityInfo;
    lastAuthenticated?: Date;
}
