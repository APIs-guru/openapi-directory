import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { RepositoryAssociationStateEnum } from "./repositoryassociationstateenum";
/**
 * Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html"> <code>ListRepositoryAssociations</code> </a> operation returns a list of <code>RepositoryAssociationSummary</code> objects.
**/
export declare class RepositoryAssociationSummary extends SpeakeasyBase {
    associationArn?: string;
    associationId?: string;
    connectionArn?: string;
    lastUpdatedTimeStamp?: Date;
    name?: string;
    owner?: string;
    providerType?: ProviderTypeEnum;
    state?: RepositoryAssociationStateEnum;
}
