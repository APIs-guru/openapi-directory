import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpRoute } from "./iproute";



export class AddIpRoutesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=IpRoutes", elemType: IpRoute })
  ipRoutes: IpRoute[];

  @SpeakeasyMetadata({ data: "json, name=UpdateSecurityGroupForDirectoryControllers" })
  updateSecurityGroupForDirectoryControllers?: boolean;
}
