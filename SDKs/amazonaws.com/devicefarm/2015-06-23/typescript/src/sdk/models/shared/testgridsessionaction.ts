import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestGridSessionAction
/** 
 * An action taken by a <a>TestGridSession</a> browser instance.
**/
export class TestGridSessionAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=requestMethod" })
  requestMethod?: string;

  @Metadata({ data: "json, name=started" })
  started?: Date;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
