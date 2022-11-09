import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDestinationDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    destinationDefinitionReadList?: shared.DestinationDefinitionReadList;
    statusCode: number;
}
