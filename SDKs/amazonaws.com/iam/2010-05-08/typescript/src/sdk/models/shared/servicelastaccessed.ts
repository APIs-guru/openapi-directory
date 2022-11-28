import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackedActionLastAccessed } from "./trackedactionlastaccessed";



// ServiceLastAccessed
/** 
 * <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
**/
export class ServiceLastAccessed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  lastAuthenticated?: Date;

  @SpeakeasyMetadata()
  lastAuthenticatedEntity?: string;

  @SpeakeasyMetadata()
  lastAuthenticatedRegion?: string;

  @SpeakeasyMetadata()
  serviceName: string;

  @SpeakeasyMetadata()
  serviceNamespace: string;

  @SpeakeasyMetadata()
  totalAuthenticatedEntities?: number;

  @SpeakeasyMetadata({ elemType: TrackedActionLastAccessed })
  trackedActionsLastAccessed?: TrackedActionLastAccessed[];
}
